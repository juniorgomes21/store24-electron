import { useEffect } from "react";

function Notfound() {

  useEffect(() => {
    console.log("window.location.href", window.location.href);
    console.log(process.env.VITE_DEV_SERVER_URL);
    console.log(process.env);



  }, [])

  return (
    <div>
      NotfoundNotfound
      {`${process.env.VITE_DEV_SERVER_URL}`}
    </div>
  )
}

export default Notfound;
