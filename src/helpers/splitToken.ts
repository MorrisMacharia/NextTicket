





export function splitToken(setCookie: string) {
    return setCookie.split(";")[0].split("=")[1];
  }
 