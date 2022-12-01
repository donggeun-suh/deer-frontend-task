import { Textarea, TextInput, Label, Card, Button } from "flowbite-react";
const Form = () => {
  return (
    <div className="h-1/2 w-3/4">
      <Card className=" bg-gray-600 flex flex-col">
        <div className="mx-4 mt-4 ">
          <div className="mb-2 block">
            <Label htmlFor="base" value="Title" />
          </div>
          <Textarea
            id="comment"
            placeholder=""
            required={true}
            rows={1}
            className="p-2"
          />
        </div>
        <div className="mx-4 mb-4 ">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Content" />
          </div>
          <Textarea
            id="comment"
            placeholder=""
            required={true}
            rows={12}
            className="p-2"
          />
        </div>
      </Card>
    </div>
  );
};

export default Form;
