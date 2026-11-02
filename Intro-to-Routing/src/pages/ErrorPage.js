import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();

    useEffect(()=>{
        // setTimeout(()=> navigate("/"),3000)
        // setTimeout(()=> navigate(-1),3000)
        setTimeout(()=> navigate(-2),3000)
    })

  return (
    <>
      <main>
        <h1>Error Page!</h1>
      </main>
    </>
  );
}

export default ErrorPage;
