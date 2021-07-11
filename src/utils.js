export const isLogin = () => {
  return localStorage.getItem("logged") === "true";
};
export const isOfficer=()=>{
  return true;
  // return localStorage.getItem("isofficer") === 'true';
}