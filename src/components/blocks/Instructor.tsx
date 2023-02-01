export default function Instructor() {
  return (
    <div className="m-auto w-full max-w-[58.5rem]">
      <h1 className="mb-10 text-5xl font-semibold text-white">
        Your instructor
      </h1>
      <div className="flex rounded bg-gray-700 p-10">
        <div className="mr-14 block h-20 w-20 shrink-0 rounded bg-white"></div>
        <div>
          <h3 className="mb-4 resize-none text-3xl font-semibold text-gray-50">
            Sam Pattuzzi
          </h3>
          <p className="w-fit text-md text-gray-200">
            Sam wrote his first game at 14, hacking together little games in
            Macromedia Flash during his summer holidays. Not long after, he
            taught himself C++ followed by Python and web programming. He was
            hooked.
            <br />
            <br /> In 2010 he went to study Computer Science at the University
            of Cambridge and he is been in Cambridge ever since. That is where
            he caught the entrepreneurial bug and realised he would not want a
            traditional job for long. So after a few years working in various
            jobs to get experience, he quit and started burning through his
            savings looking for his calling.
          </p>
        </div>
      </div>
    </div>
  )
}
