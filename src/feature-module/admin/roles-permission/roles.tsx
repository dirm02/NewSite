import * as Icon from "react-feather";
import ImageWithBasePath from "../../../core/img/ImageWithBasePath";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import AddRole from "./add-role-modal";
import EditRole from "./edit-role-modal";
import { Link } from "react-router-dom";
import { all_routes } from "../../../core/data/routes/all_routes";
import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";

const Roles = () => {
  const routes = all_routes;

  const roles = [
    {
      id: 1,
      name: "Administrator",
      created: "30 Sep 2023",
    },
    {
      id: 2,
      name: "Manager",
      created: "16 Sep 2023",
    },
    {
      id: 3,
      name: "Accountant",
      created: "30 Sep 2023",
    },
  ];

  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const actionButton = (rowData: any) => {
    return (
      <div className="table-action d-flex">
        <Link
          className="me-2"
          to=""
          data-bs-toggle="modal"
          data-bs-target="#edit-role"
          state={{ roleId: rowData.id }} // Pass the role ID for editing
        >
          <Icon.Edit3 className="react-feather-custom" />
          Edit Role
        </Link>
        <Link to={routes.permissions} state={{ roleId: rowData.id }}>
          <Icon.Shield className="react-feather-custom" />
          Permissions
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Roles &amp; Permission</h5>
            <div className="list-btn">
              <ul>
                <li>
                  <Link className="btn-filters active" to={routes.permissions}>
                    <Icon.List className="react-feather-custom" />
                  </Link>
                </li>
                <li>
                  <div className="filter-sorting">
                    <ul>
                      <li>
                        <Link to="#" className="filter-sets">
                          <Icon.Filter className="react-feather-custom me-2"></Icon.Filter>
                          Filter
                        </Link>
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/admin/img/icons/sort.svg"
                            className="me-2"
                            alt="img"
                          />
                        </span>
                        <div className="review-sort w-100">
                          <Dropdown
                            value={selectedValue}
                            onChange={(e) => setSelectedValue(e.value)}
                            options={value}
                            optionLabel="name"
                            placeholder="A - Z"
                            className="select admin-select-breadcrumb"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link
                    className="btn btn-primary"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#add-role"
                  >
                    <Icon.Plus className="react-feather-custom me-2" />
                    Add Role
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                {" "}
                {/* Fixed typo in className */}
                <DataTable
                  paginator
                  rows={10}
                  paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink"
                  currentPageReportTemplate="{first} to {last} of {totalRecords}"
                  value={roles}
                  className="table datatable"
                  showGridlines
                  tableStyle={{ minWidth: "50rem" }}
                >
                  <Column sortable field="id" header="ID"></Column>
                  <Column sortable field="name" header="Name"></Column>
                  <Column sortable field="created" header="Created"></Column>
                  <Column header="Action" body={actionButton}></Column>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddRole />
      <EditRole />
    </>
  );
};

export default Roles;
