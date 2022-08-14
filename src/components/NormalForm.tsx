import TextField from "../components/atoms/TextField";
import { SubmitHandler, useForm } from "react-hook-form";

type FormParams = {
  firstName: string;
  lastName: string;
  age: string;
};

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormParams>();

  const onSubmit: SubmitHandler<FormParams> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>firstName</p>
      <TextField {...register("firstName", { required: true })} />
      {errors.firstName && <p>first name is required.</p>}

      <p>lastName</p>
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}

      <p>age</p>
      <input {...register("age", { pattern: /\d+/, required: true })} />
      {errors.age && <p>Please enter number for age.</p>}

      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default NormalForm;
