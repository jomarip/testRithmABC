// BoundAccountList.js
import React from 'react';

export default function BoundAccountList({ accounts }) {
  return (
    <div>
      {accounts.map((account, index) => (
        <div key={index}>
          {/* Display bound account info */}
        </div>
      ))}
    </div>
  );
}
