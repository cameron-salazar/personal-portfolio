export default function ResumePage() {
    return (
      <div className="max-w-5xl mx-auto p-6 space-y-4">
        <a className="underline" href="/resume.pdf" download>Download PDF</a>
        <object data="/resume.pdf" type="application/pdf" className="w-full h-[80vh]">
          <p>Can’t display PDF. <a className="underline" href="/resume.pdf">Open it instead</a>.</p>
        </object>
      </div>
    );
  }
  