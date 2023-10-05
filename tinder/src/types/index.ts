/* eslint-disable @typescript-eslint/no-explicit-any */
export type TDataItem = {
  id: number;
  name: string;
  category: string;
  imgURL: string;
  description: string;
};

type TInterest = {
  name: string;
  cost: number;
};
function createPerson<T>(
  name: string,
  age: number,
  height: number | string,
  hairColor: string,
  interests: T
) {
  return {
    name,
    age,
    height,
    hairColor,
    interests,
  };
}
type TPerson={
	age: number;
  name: string;
  height: string | number;
  hairColor: string;
  interests: TInterest[];
}
const John = createPerson<TInterest[]>("John", 26, "178cm", "black", [
  { name: "shopping", cost: 111 },
]);
console.log("⭐ ~ file: index.ts:26 ~ John:", John);

function getPersonData(person: {
  name: string;
  age: number;
  height: string | number;
  hairColor: string;
  interests: TInterest[];
}) {
  return {
    ...person,
    age: 26 * 12,
  };
}

const getJohnData = getPersonData(John);
console.log("⭐ ~ file: index.ts:35 ~ getJohnData:", getJohnData);
const {name:personName}:{name:string} = {name: 'John'}
const [a:age1,b:age2]:[number, number] = [111,222]
const test:number = 123
console.log("⭐ ~ file: index.ts:57 ~ name:", personName)

function getPersonAgeData({name:personName,age,height,hairColor,interests}:TPerson) {
  return `${personName}是${age * 12}個月`;
}

const getJohnAgeData = getPersonAgeData(John);
console.log("⭐ ~ file: index.ts:49 ~ getJohnAgeData:", getJohnAgeData);