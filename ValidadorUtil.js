export class ValidadorUtil {
   static validarcpf(cpf){
    if(cpf.length != 11){
        return false;
    }
    if(isNaN(cpf)){
        return false;
    }
    return true;
   }
   static validaremail(email){
    if(email.includes("@")){
        return true;
   }  
    return false;
  }
}