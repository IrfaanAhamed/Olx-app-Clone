import { Button, Input, Typography } from "@material-tailwind/react";
import React from "react";

export function CommonForm({
  formControls,
  formData,
  buttonText,
  setFormData
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
    console.log(name,value);
   
    
  };
  return (
    <>
      {formControls.map((controlItem) => (
        <div  key={controlItem.name}>
          <Typography
            variant="h6"
            
            className="mt-4 "
          >
            {controlItem.label}
          </Typography>
          <Input
            type={controlItem.type}
            name={controlItem.name}
            value={formData[controlItem.name]}
            onChange={handleInputChange}
            size="lg"
            placeholder={controlItem.placeholder}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900 "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
      ))}
      <Button type="submit" className="mt-6" fullWidth>
        {buttonText || "Submit"}
      </Button>
    </>
  );
}
