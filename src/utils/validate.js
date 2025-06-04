export const checkValidateData = (name, email, password) => {
  if (name !== null) {
    const isNameValid = /^[A-Za-z\s.'-]+$/.test(name);
    if (!isNameValid) return "Name is not valid";
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  if (!isEmailValid) return "Email is not valid";

  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
