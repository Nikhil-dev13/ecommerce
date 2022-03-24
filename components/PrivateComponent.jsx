import React, { useEffect } from "react";
import { useRouter } from "next/router";

const PrivateComponent = () => {
  const router = useRouter();

   useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
   } , [])

  return <div>Private</div>;
};

export default PrivateComponent;
