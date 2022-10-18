import React from "react";
import BaseTitle from "@/components/base/base-title";
import PrefixInput from "@/components/base/prefix-input";
import DataInput from "@/components/base/data-input";
import LinkInput from "@/components/base/link-input";
import intl from "react-intl-universal";
import {DEFAULT_LIST} from "@/constants/default";

interface props {
    prefix: any,
    handleDataChange: any
    handlePrefixChange: any
    data: any
    handleLinkChange: any,
    link: any
}

const Detail: React.FunctionComponent<props> = ({
                                                  prefix,
                                                  data,
                                                  link,
                                                  handleDataChange,
                                                  handlePrefixChange,
                                                  handleLinkChange
                                              }) => {
    return (
        <div className='mb-8'>
            <BaseTitle value={intl.get('bsDetail')} />
            <div className='m-2'>
                {
                    DEFAULT_LIST.map((item, index) => {
                        return (
                            <div className='flex mb-3' key={index}>
                                <PrefixInput
                                    handlePrefixChange={handlePrefixChange}
                                    value={prefix[item?.name]}
                                    type={item?.name}
                                />
                                {
                                    item?.placeholderData &&
                                    <DataInput
                                        handleDataChange={handleDataChange}
                                        value={data[item?.name]}
                                        type={item?.name}
                                        placeholder={item?.placeholderData}
                                    />
                                }
                                {
                                    item?.placeholderLink &&
                                    <LinkInput
                                        handleLinkChange={handleLinkChange}
                                        value={link[item?.name]}
                                        type={item?.name}
                                        placeholder={item?.placeholderLink}
                                    />
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Detail