export const validateFields = (e: string,p: string) => {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e);
    if (!emailRegex) {
        return "Please enter valid email address"
    }
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(p);
if (!passwordRegex) {
    return "Please enter valid password type"
}
return null
}