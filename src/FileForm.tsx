import { useCallback, ChangeEventHandler, useContext } from "react";

import { FileContext } from "./App";

export default function FileForm() {
  const [, setFile] = useContext(FileContext);
  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => setFile(e.currentTarget.files?.[0]),
    [setFile]
  );
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <label htmlFor="file">File:</label>
      <input type="file" name="file" onChange={onChange} />
      <button type="submit" style={{ marginTop: "1em" }}>
        Submit
      </button>
    </form>
  );
}
