import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const SectionTitle = (title: any) => {
  return(
    <div className="section-title text-center pd-5">
      <h2 className="title mb-5 txt-xxl">{ title.mainTitle }</h2>
      <h4 className="sub-title txt-lg txt-secondary pt-5">{ title.subTitle }</h4>
    </div>

  );
};

export default SectionTitle;
