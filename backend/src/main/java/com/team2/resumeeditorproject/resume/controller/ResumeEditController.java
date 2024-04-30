package com.team2.resumeeditorproject.resume.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.team2.resumeeditorproject.resume.domain.Resume;
import com.team2.resumeeditorproject.resume.dto.ResumeDTO;
import com.team2.resumeeditorproject.resume.service.ResumeEditService;
import com.team2.resumeeditorproject.resume.dto.ResumeEditDTO;
import com.team2.resumeeditorproject.resume.service.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
/**
 * resumeEditController
 *
 * @author : 안은비
 * @fileName : ResumeEditController
 * @since : 04/25/24
 */
@RestController
@RequestMapping("/resumeEdit")
public class ResumeEditController {
    @Autowired
    private ResumeEditService resumeEditService;

    @Autowired
    private ResumeService resumeService;

    @PostMapping("/upload")
    public ResponseEntity<Map<String, String>> insertResumeEdit(@RequestBody ResumeEditDTO resumeEditDTO) {
        Map<String, String> response = new HashMap<>();
        Date today = new Date();
        try{
            ResumeEditDTO dto = resumeEditService.insertResumeEdit(resumeEditDTO);
            response.put("response", "resumeEdit table insert success");
            response.put("time", today.toString());
            response.put("status", "Success");

            Long resumeEditId = dto.getRNum(); // resumeEdit 테이블의 primary key 얻기


            // /result 요청 보내기
            ResponseEntity<Map<String, String>> resultResponse = insertResume(resumeEditId);

            if (resultResponse.getBody().get("status").equals("Success")) {
                return ResponseEntity.ok(response); // 1. 상태 (성공,실패) 2. 시간 3. 메시지내용(성공, 실패이유)
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(resultResponse.getBody());
            }

        }
        catch (Exception e){
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("response", "server error");
            errorResponse.put("time", today.toString());
            errorResponse.put("status", "Fail");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);

        }
    }


    @PostMapping("/result")
    public ResponseEntity<Map<String, String>> insertResume(@RequestParam Long resumeEditId) {
        Map<String, String> response = new HashMap<>();
        Date today = new Date();
        try{
            // result 요청에 필요한 데이터 설정
            ResumeDTO resumeDTO = new ResumeDTO();

            // resume 테이블에 저장
            resumeDTO.setR_num(resumeEditId);

            // resumeDTO에 필요한 데이터 설정
            resumeDTO.setContent("GPT로 첨삭된 자소서 가져와서 넣기");
            resumeDTO.setU_num(3L);

            ResumeDTO dto = resumeService.insertResume(resumeDTO);

            // resultContent/{resumeId} 요청 보내기
            getResumeContent(resumeEditId);

            response.put("response", "resume table insert success");
            response.put("time", today.toString());
            response.put("status", "Success");
            return ResponseEntity.ok(response);
        }
        catch (Exception e){
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("response", "server error");
            errorResponse.put("time", today.toString());
            errorResponse.put("status", "Fail");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @GetMapping("/resultContent/{resumeId}")
    public ResponseEntity<String> getResumeContent(@PathVariable("resumeId")  Long resumeId) {
        try {
            // resumeId를 사용하여 resume 테이블에서 content 내용을 가져옴
            String content = resumeService.getResumeContent(resumeId);

            // content 내용을 클라이언트에게 반환
            return ResponseEntity.ok(content);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to fetch resume content");
        }
    }


}
