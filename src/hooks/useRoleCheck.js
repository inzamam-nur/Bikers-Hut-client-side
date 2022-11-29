import { useEffect, useState } from "react";

const useRoleCheck = (email) => {
  const [roleCheck, setRoleCheck] = useState("");

  const [adminloading , setAdminLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/usersRole/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setRoleCheck(data.userType);
        // console.log(data);
          setAdminLoading(false)
      });
  }, [email]);
  return [roleCheck, adminloading];
};
export default useRoleCheck;
