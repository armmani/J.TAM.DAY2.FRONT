import { LoaderCircle } from "lucide-react";

function Buttons({ isSubmitting, label }) {
  return (
    <button disabled={isSubmitting} className="btn btn-neutral mt-4">
      {isSubmitting ? (
        <>
          <p>LOADING</p>
          <LoaderCircle className="animate-spin" />
        </>
      ) : (
        label
      )}
    </button>
  );
}
export default Buttons;
