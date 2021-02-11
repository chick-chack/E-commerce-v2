import React from 'react';
import i18next from 'i18next';

const FaqsContent = () => (

    <div >
    {/* <div className="table-responsive"> */}
        <table className="table ps-table--faqs">
            <tbody>
                <tr>
                    {/* <td className="heading" rowSpan="3">
                        <h4>SHIPPING</h4>
                    </td> */}
                    <td className="question">
                       {i18next.t('q_1')}
                    </td>
                    <td>
                    {i18next.t('a_1')}
                    <br/>
                    {i18next.t('a_11')}
                    </td>
                </tr>
                <tr>
                    <td className="question"  colspan="2">
                        {i18next.t('q_2')}
                        </td>
                </tr>
                <tr>
                    <td className="question">
                        {i18next.t('a_2_1_h')}
                    </td>
                    <td>
                        {i18next.t('a_2_1_p')}
                    </td>
                </tr>
                <tr>
                    <td className="question">
                        {i18next.t('a_2_2_h')}
                    </td>
                    <td>
                        {i18next.t('a_2_2_p')}
                        <br />
                        {i18next.t('a_2_2_p1')}
                        <br />
                        {i18next.t('a_2_2_p2')}
                        <br />
                        {i18next.t('a_2_2_p3')}
                        <br />
                        {i18next.t('a_2_2_p4')}
                    </td>
                </tr>
                <tr>
                    <td className="question">
                        {i18next.t('a_2_3_h')}
                    </td>
                    <td>
                        {i18next.t('a_2_3_p')}
                    </td>
                </tr>
                <tr>
                    <td className="question">
                        {i18next.t('a_2_4_h')}
                    </td>
                    <td>
                        {i18next.t('a_2_4_p')}
                    </td>
                </tr>
                <tr>
                    <td className="question">
                        {i18next.t('a_2_4_h')}
                    </td>
                    <td>
                        {i18next.t('a_2_4_p')}
                    </td>
                </tr>
                <tr>
                    <td className="question">
                        {i18next.t('a_2_5_h')}
                    </td>
                    <td>
                        {i18next.t('a_2_5_p')}
                    </td>
                </tr>
                <tr>
                    <td className="question">
                        {i18next.t('a_2_6_h')}
                    </td>
                    <td>
                        {i18next.t('a_2_6_p')}
                        <br />
                        {i18next.t('a_2_6_p1')}
                    </td>
                </tr>
                <tr>
                    <td className="question">
                        {i18next.t('a_2_7_h')}
                    </td>
                    <td>
                        {i18next.t('a_2_7_p')}
                    </td>
                </tr>
                <tr>
                    <td className="question">
                        {i18next.t('a_2_8_h')}
                    </td>
                    <td>
                        {i18next.t('a_2_8_p')}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default FaqsContent;
