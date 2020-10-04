package com.rmit.group3.spring.security;

public class SecurityConstants {
    public static final String CUSTOMER_SIGNUP = "/api/customer/**";
    public static final String EMPLOYEE_SIGNUP = "/api/employee/**";
    public static final String USER_LOGIN = "api/user/login";
    public static final String H2_URL = "/h2-console/**";
    public static final long EXPIRATION = 30_000;
    public static final String SECRET = "SecretKeyToGenJWTs";
    public static final String HEADER_STRING = "Authorization";
    public static final String TOKEN_PREFIX= "Bearer ";
}
