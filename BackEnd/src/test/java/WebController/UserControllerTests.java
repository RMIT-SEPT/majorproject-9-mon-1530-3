package WebController;

import com.rmit.group3.spring.Application;
import com.rmit.group3.spring.Repositories.UserRepository;
import com.rmit.group3.spring.model.User;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(classes=Application.class)
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@EnableWebMvc
public class UserControllerTests {

    @Autowired
    private WebApplicationContext wac;

    @Autowired
    UserRepository userRepository;

    private MockMvc mockMVC;
    @Before
    public void setup() throws Exception{
        this.mockMVC = MockMvcBuilders.webAppContextSetup(this.wac).build();
    }

    @Test
    public void testLoginExistingUser() throws Exception{
        User testUser = new User("Liam2020", "1234", "customer");
        userRepository.save(testUser);

        mockMVC.perform(post("/api/user/login").contentType(MediaType.APPLICATION_JSON)
                .content("{\"username\":\"Liam2020\",\"password\":\"1234\",\"userType\":\"customer\"}")
                .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(jsonPath("$.username").value("Liam2020"))
                .andExpect(jsonPath("$.password").value("1234"))
                .andExpect(jsonPath("$.userType").value("customer"));
    }

    @Test
    public void testLoginNonExistingUser() throws Exception{
        MvcResult mvcResult = mockMVC.perform(post("/api/user/login").contentType(MediaType.APPLICATION_JSON)
                .content("{\"username\":\"Liam2020\",\"password\":\"1234\",\"userType\":\"customer\"}")
                .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andReturn();

        String responseBody = mvcResult.getResponse().getContentAsString();

        assertThat(responseBody).isEqualTo("false");
    }

    @Test
    public void testCorrectUserTypeReturn() throws Exception{
        User testUser = new User("Liam2020", "1234", "employee");
        userRepository.save(testUser);

        mockMVC.perform(post("/api/user/login").contentType(MediaType.APPLICATION_JSON)
                .content("{\"username\":\"Liam2020\",\"password\":\"1234\",\"userType\":\"customer\"}")
                .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(jsonPath("$.userType").value("employee"));
    }

    @Test
    public void testIncorrectPassword() throws Exception{
        User testUser = new User("Liam2020", "1234", "customer");
        userRepository.save(testUser);

        MvcResult mvcResult = mockMVC.perform(post("/api/user/login").contentType(MediaType.APPLICATION_JSON)
                .content("{\"username\":\"Liam2020\",\"password\":\"4321\",\"userType\":\"customer\"}")
                .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andReturn();

        String responseBody = mvcResult.getResponse().getContentAsString();

        assertThat(responseBody).isEqualTo("false");
    }

    @Test
    public void testIncorrectUsername() throws Exception{
        User testUser = new User("Liam2020", "1234", "customer");
        userRepository.save(testUser);

        MvcResult mvcResult = mockMVC.perform(post("/api/user/login").contentType(MediaType.APPLICATION_JSON)
                .content("{\"username\":\"Liam202\",\"password\":\"1234\",\"userType\":\"customer\"}")
                .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andReturn();

        String responseBody = mvcResult.getResponse().getContentAsString();

        assertThat(responseBody).isEqualTo("false");
    }
}