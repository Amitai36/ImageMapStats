import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Form from "./Form";

function SignIn() {
  return (
    <div>
      <Card>
        <CardHeader title={"Sign In"} />
        <CardContent>
          <Form />
        </CardContent>
      </Card>
    </div>
  );
}

export default SignIn;
