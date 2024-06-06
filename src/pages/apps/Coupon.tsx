import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+";

const couponSchema = z.object({
  size: z.number().min(4).max(25),
  prefix: z.string().optional(),
  includeNumbers: z.boolean(),
  includeCharacters: z.boolean(),
  includeSymbols: z.boolean(),
});

type CouponFormValues = z.infer<typeof couponSchema>;

const Coupon = () => {
  const [coupon, setCoupon] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CouponFormValues>({
    resolver: zodResolver(couponSchema),
    defaultValues: {
      size: 4,
      prefix: "",
      includeNumbers: false,
      includeCharacters: false,
      includeSymbols: false,
    },
  });

  const copyText = async (coupon: string) => {
    await window.navigator.clipboard.writeText(coupon);
    setIsCopied(true);
  };

  const onSubmit = (data: CouponFormValues) => {
    if (
      !data.includeNumbers &&
      !data.includeCharacters &&
      !data.includeSymbols
    ) {
      return alert("Please Select One At Least");
    }

    let result: string = data.prefix || "";
    const loopLength: number = data.size - result.length;

    let entireString: string = "";
    if (data.includeCharacters) entireString += allLetters;
    if (data.includeNumbers) entireString += allNumbers;
    if (data.includeSymbols) entireString += allSymbols;

    for (let i = 0; i < loopLength; i++) {
      const randomNum: number = Math.floor(Math.random() * entireString.length);
      result += entireString[randomNum];
    }

    setCoupon(result);
  };

  useEffect(() => {
    setIsCopied(false);
  }, [coupon]);

  return (
    <main className="dashboard-app-container">
      <h1>Coupon</h1>
      <section>
        <form className="coupon-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Text to include"
            {...register("prefix")}
            maxLength={watch("size")}
          />
          {errors.prefix && <p>{errors.prefix.message}</p>}

          <input
            type="number"
            placeholder="Coupon Length"
            {...register("size", { valueAsNumber: true })}
            min={4}
            max={25}
          />
          {errors.size && <p>{errors.size.message}</p>}

          <fieldset>
            <legend>Include</legend>

            <input type="checkbox" {...register("includeNumbers")} />
            <span>Numbers</span>

            <input type="checkbox" {...register("includeCharacters")} />
            <span>Characters</span>

            <input type="checkbox" {...register("includeSymbols")} />
            <span>Symbols</span>
          </fieldset>
          <button type="submit">Generate</button>
        </form>

        {coupon && (
          <code>
            {coupon}{" "}
            <span onClick={() => copyText(coupon)}>
              {isCopied ? "Copied" : "Copy"}
            </span>{" "}
          </code>
        )}
      </section>
    </main>
  );
};

export default Coupon;
