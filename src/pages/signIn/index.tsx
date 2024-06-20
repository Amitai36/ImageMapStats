import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Form from "./Form";
import { Dispatch, SetStateAction } from "react";

interface SignInProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function SignIn(props: SignInProps) {
  const { setOpen } = props;
  return (
    <div>
      <Card>
        <CardContent>
          <Form setOpen={setOpen} />
        </CardContent>
      </Card>
    </div>
  );
}

export default SignIn;
