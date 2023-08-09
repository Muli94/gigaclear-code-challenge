"use client";

import Typography from "@/src/components/atoms/typography/Typography";

function Error(): JSX.Element {
  return (
    <div className="w-full h-fit">
      <div className="flex justify-center flex-col items-center w-full h-full">
        <Typography variant="h1" color="primary">
          404
        </Typography>
        <Typography variant="body1" color="primary">
          We are sorry. The Post cannot be found.
        </Typography>
      </div>
    </div>
  );
}

export default Error;
