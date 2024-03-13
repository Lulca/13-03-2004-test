export const USER_NAME_VALIDATION = {
   required: "Username is required",
   maxLength: {
     value: 20,
     message: "Username cannot be longer than 20 characters"
   }
 }
 
 export const PASSWORD_VALIDATION = {
   required: "Password is required",
   minLength: {
     value: 8,
     message: "Password must be at least 8 characters long"
   }
 }