import { useState } from "react";

export function useUserInfo()  {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [age, setAge] = useState(NaN);

return {firstName, setFirstName, lastName, setLastName, age, setAge}
}