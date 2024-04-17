import React from 'react';
import "../CSS/production.css";
import ProdDescr from '../components/ProductionPage/ProdDescr';
import ProdAdv from '../components/ProductionPage/ProdAdv';
import ProdCases from '../components/ProductionPage/ProdCases';

export default function Production() {
  return (
    <div>
      <ProdDescr />
      <ProdAdv />
      <ProdCases />
    </div>
  )
}
