import React from 'react';

import {styles} from "../../configs";
import {Pagination} from "@mui/material";

const MyPagination = ({maxPage,change,currentPage}) => {

    return (
        <div className={`${styles.container} justify-center my-4`}>
            <div className="bg-red-700 rounded-[20px] px-4 py-1">

                <Pagination
                    onChange={(_, num) => change(num)}
                    activeProps={{ style: { back: 'bold' } }}
                    page={currentPage}
                    showFirstButton
                    showLastButton
                    count={maxPage <= 500 ? maxPage : 500} variant="outlined"/>
            </div>
        </div>
    );
};

export {MyPagination};