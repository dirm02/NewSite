import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import SettingsSidebar from '../common/settingssidebar';

const SystemBackup = () => {

        ;
    return (
        <>
            <div className="page-wrapper page-settings">
                <div className="content-sidelink float-start">
                    <div className="content-sidelinkheading">
                        <h6>Settings</h6>
                    </div>
                    <SettingsSidebar />

                </div>
                <div className="row">
                    <div className="content-table">
                        <div className="content-page-header content-page-headersplit">
                            <h5>System Backup</h5>
                            <div className="page-head-btn">
                                <button className="btn btn-primary" type="button">
                                    Generate Backup
                                </button>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="table-resposnive table-bottom">
                                <table className="table datatable">
                                    <thead>
                                        <tr>
                                            <th>File Name</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Sed perspiciatis omni_File.sql</td>
                                            <td>27 Sep 2023 10:11AM </td>
                                            <td>
                                                <div className="table-actions d-flex">
                                                    <Link className="delete-table me-2" to="#">
                                                        <Icon.Download className='react-feather-custom' />
                                                    </Link>
                                                    <Link className="delete-table border-none" to="#">
                                                        <Icon.Trash2 className='react-feather-custom' />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Sed perspiciatis omni_File.sql</td>
                                            <td>27 Sep 2023 10:11AM </td>
                                            <td>
                                                <div className="table-actions d-flex">
                                                    <Link className="delete-table me-2" to="#">
                                                        <Icon.Download className='react-feather-custom' />
                                                    </Link>
                                                    <Link className="delete-table border-none" to="#">
                                                        <Icon.Trash2 className='react-feather-custom' />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Sed perspiciatis omni_File.sql</td>
                                            <td>27 Sep 2023 10:11AM </td>
                                            <td>
                                                <div className="table-actions d-flex">
                                                    <Link className="delete-table me-2" to="#">
                                                        <Icon.Download className='react-feather-custom' />
                                                    </Link>
                                                    <Link className="delete-table border-none" to="#">
                                                        <Icon.Trash2 className='react-feather-custom' />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Sed perspiciatis omni_File.sql</td>
                                            <td>27 Sep 2023 10:11AM </td>
                                            <td>
                                                <div className="table-actions d-flex">
                                                    <Link className="delete-table me-2" to="#">
                                                        <Icon.Download className='react-feather-custom' />
                                                    </Link>
                                                    <Link className="delete-table border-none" to="#">
                                                        <Icon.Trash2 className='react-feather-custom' />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Sed perspiciatis omni_File.sql</td>
                                            <td>27 Sep 2023 10:11AM </td>
                                            <td>
                                                <div className="table-actions d-flex">
                                                    <Link className="delete-table me-2" to="#">
                                                        <Icon.Download className='react-feather-custom' />
                                                    </Link>
                                                    <Link className="delete-table border-none" to="#">
                                                        <Icon.Trash2 className='react-feather-custom' />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SystemBackup
