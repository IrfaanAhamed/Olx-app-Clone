import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../store/ContextAuth";

export function SellProductForm() {
  const { user, firebaseApp } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image);

    firebaseApp
      .storage()
      .ref(`/images/${image.name}`)
      .put(image)
      .on("state_changed", console.log);
    .catch((err) => console.log(err))
    .then(({ ref }) => {
      console.log(ref);

      ref.getDownloadURL().then((url) => {
        console.log(url);
      });
    });
  };

  return (
    <Card className="p-6 mx-auto mt-6 max-w-md" shadow={true}>
      <Typography variant="h4" color="blue-gray" className="text-center">
        POST YOUR AD
      </Typography>

      <form className="my-4">
        <div className="mb-4 flex flex-col gap-4">
          <Typography variant="h6" color="blue-gray">
            Name
          </Typography>
          <Input
            size="lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
          />

          <Typography variant="h6" color="blue-gray">
            Category
          </Typography>
          <Input
            size="lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter product category"
          />

          <Typography variant="h6" color="blue-gray">
            Price
          </Typography>
          <Input
            type="number"
            size="lg"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter product price"
          />

          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="product preview"
              className="w-32 h-32 object-cover border rounded mb-2"
            />
          )}
          <Typography variant="h6" color="blue-gray">
            Upload Image
          </Typography>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) setImage(file);
            }}
          />
        </div>

        <Button onClick={handleSubmit} type="submit" className="mt-4" fullWidth>
          Upload and Submit
        </Button>
      </form>
    </Card>
  );
}
