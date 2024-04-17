import React from 'react';
import "../CSS/oragen.css";
import OragenDescr from '../components/OragenPage/OragenDescr';
import OragenFunc from '../components/OragenPage/OragenFunc';
import Stack from '../components/OragenPage/Stack';


export default function CRM() {
  return (
    <div>
      <OragenDescr />
      <OragenFunc />
      <Stack />
    </div>
  )
}
