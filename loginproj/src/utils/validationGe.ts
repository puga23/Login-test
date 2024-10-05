// აუცილებელი ველები
export const requiredMsg = "ეს ველი აუცილებელია";
export const requiredCheckBoxMsg = "ეს მონიშვნა აუცილებელია";
export const requiredTwoCheckBoxMsg = "მინიმუმ ერთი მონიშვნა უნდა იყოს არჩეული";

// ელფოსტის ვალიდაცია
export const emailErrorMsg = "გთხოვთ, შეიყვანოთ სწორი ელფოსტა";
export const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
export const emailMaxLengthMsg = "მაქსიმუმ 254 სიმბოლო";

// სახელი (firstName) ვალიდაცია
export const firstNameErrorMsg = "გთხოვთ, შეიყვანოთ მხოლოდ ასოები ამ ველში";
export const firstNamePattern = /^([a-zA-ZäöüÄÖÜß\s]*)?$/;
export const firstNameMaxLengthMsg = "მაქსიმუმ 30 სიმბოლო";

// გვარი (lastName) ვალიდაცია
export const lastNameErrorMsg = "გთხოვთ, შეიყვანოთ მხოლოდ ასოები ამ ველში";
export const lastNamePattern = /^([a-zA-ZäöüÄÖÜß\s]*)?$/;
export const lastNameMaxLengthMsg = "მაქსიმუმ 30 სიმბოლო";

// თემის (subject) ვალიდაცია
export const subjectMaxLengthMsg = "გთხოვთ, შეიყვანოთ მაქსიმუმ 50 სიმბოლო";

// ტექსტის ვალიდაცია
export const textMaxLengthMsg = "გთხოვთ, შეიყვანოთ მაქსიმუმ 500 სიმბოლო";
export const textMinLengthMsg = "გთხოვთ, შეიყვანოთ მინიმუმ 10 სიმბოლო";

// ასაკის ვალიდაცია
export const ageErrorMsg = "გთხოვთ, შეიყვანოთ მხოლოდ ციფრები";
export const agePattern = /^(0?[1-9][0-9]?)$/;
export const ageMaxLengthMsg = "მაქსიმუმ 2 სიმბოლო";

// ტელეფონის ვალიდაცია
export const telErrorMsg = "გთხოვთ, შეიყვანოთ მხოლოდ ტელეფონის ნომერი";
export const telPattern = /^(\+)?\d+$/;
export const telMaxLengthMsg = "მაქსიმუმ 15 სიმბოლო";

// მისამართის ვალიდაცია
export const addressErrorMsg = "გთხოვთ, შეიყვანოთ სწორი მისამართი";
export const addressPattern = /^[a-zA-Z0-9\s.,\-#äöüÄÖÜß]*$/;
export const addressMaxLengthMsg = "მაქსიმუმ 50 სიმბოლო";
export const addressRequiredMsg = "გთხოვთ, შეავსოთ ყველა აუცილებელი ველი";

// პაროლის ვალიდაცია
export const passwordMsg =
  "გთხოვთ, შექმენით პაროლი, რომელიც შეიცავს მინიმუმ ერთ დიდ ასოს, ერთ ციფრს და ერთ სპეციალურ სიმბოლოს.";
export const passwordPattern =
  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}[|\\:;"'<>,.?/_₹])(\S).{7,20}$/;
export const passwordMinLengthMsg = "მინიმუმ 8 სიმბოლო";
export const passwordMaxLengthMsg = "მაქსიმუმ 20 სიმბოლო";
export const confirmPasswordMsg = "პაროლები არ ემთხვევა";
