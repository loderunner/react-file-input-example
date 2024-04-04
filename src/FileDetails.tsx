export default function FileDetails({ file }: { file: File }) {
  return (
    <dl>
      <dt>File name</dt>
      <dd>{file.name}</dd>
      <dt>File size</dt>
      <dd>{file.size}B</dd>
      <dt>MIME type</dt>
      <dd>
        <code>{file.type}</code>
      </dd>
    </dl>
  );
}
