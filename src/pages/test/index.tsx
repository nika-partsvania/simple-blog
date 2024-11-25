import { Controller, useFieldArray, useFormContext } from "react-hook-form";

export type FormValues = {
  email: string;
  password: string;
  building: { name: string }[];
};

export const FormDefaultValues: FormValues = {
  email: "",
  password: "",
  building: [{ name: "" }],
};

const TestView = () => {
  const { control, handleSubmit, setValue } = useFormContext<FormValues>();

  const { fields, append, remove } = useFieldArray<FormValues>({
    name: "building",
    control,
  });

  const onSubmit = (fieldValues: any) => {
    console.log(fieldValues);
  };

  const handleAddBuilding = (e: any) => {
    e.preventDefault();

    append({ name: "" });
  };

  const handleRemoveBuilding = (index: number) => {
    remove(index);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <label>Email</label>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <input
              onChange={onChange}
              value={value}
              className="border border-black"
            />
          );
        }}
      />

      <label>Password</label>
      <Controller
        name="password"
        control={control}
        render={({ field: { value, onChange } }) => {
          return (
            <input
              value={value}
              onChange={onChange}
              type="password"
              className="border border-black"
            />
          );
        }}
      />
      {fields.map((field, index) => {
        return (
          <div className="flex flex-col border border-black p-2" key={field.id}>
            <div>Building {index + 1}</div>
            {index === 0 ? null : (
              <button
                onClick={() => handleRemoveBuilding(index)}
                className="mt-6 text-red-500"
              >
                Remove Building
              </button>
            )}
            <Controller
              // @ts-ignore
              name={`building.${index}.name`}
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <input
                    value={value}
                    onChange={onChange}
                    className="border border-black"
                  />
                );
              }}
            />
          </div>
        );
      })}

      <button onClick={handleAddBuilding}>Add Building</button>

      <button type="submit" onClick={handleSubmit(onSubmit)}>
        SUBMIT
      </button>
      <button
        onClick={() => {
          setValue("email", "Raghac@gmail.com");
          setValue("password", "password");
          setValue("building", [{ name: "building" }]);

          // reset({
          //   email: "Raghac@gmail.com",
          //   password: "raghac",
          //   building: [{ name: "building" }],
          // });
        }}
      >
        Insert Random Values
      </button>
    </div>
  );
};

export default TestView;
