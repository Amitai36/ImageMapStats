import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

import Form from "./Form";
import { Dispatch, SetStateAction } from "react";

interface SignUpProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function SignUp(props:SignUpProps) {
  const {setOpen} = props
  return (
    <div>
      <Card>
        <CardContent>
          <Form setOpen={setOpen}/>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUp;
