import { useParams } from "react-router-dom";

type Params = {
  date: string;
};

export default function() {
  const params = useParams<Params>();

  return params;
}
