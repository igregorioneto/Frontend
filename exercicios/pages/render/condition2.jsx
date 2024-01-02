import If from "@/components/If";

export default function Condition2() {
  const number = 5

  return(
    <div>
        <If test={number % 2 === 0}>
          O número {number} é par
        </If>
        <If test={number % 2 === 1}>
          O número {number} é impar
        </If>
    </div>
  );
}