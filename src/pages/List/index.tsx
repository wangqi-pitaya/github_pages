import React from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { getInvoices } from './constants';
import { QueryNavLink } from '../../components';

export default function List() {
  const invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <div>
        <input
          value={searchParams.get("filter") || ""}
          onChange={event => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
      </div>
      {
        invoices.filter(invoice => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = invoice.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        }).map((invoice) => {
          return (
            <div key={invoice.number}>
              <QueryNavLink
                to={`/list/${invoice.number}`}
                style={({ isActive }: any) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : ""
                  };
                }}
              >{invoice.name}</QueryNavLink>
            </div>
          )
        })
      }
      <Outlet />
    </div>
  )
}
