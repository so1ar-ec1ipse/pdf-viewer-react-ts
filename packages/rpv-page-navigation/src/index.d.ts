/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Component, ReactElement } from 'react';
import { Plugin } from '@phuocng/rpv';

// -------------------
// Render current page
// -------------------

export interface RenderCurrentPageLabelProps {
    currentPage: number;
    numberOfPages: number;
}

export interface CurrentPageLabelProps {
    children?: RenderCurrentPageLabel;
}

export type RenderCurrentPageLabel = (props: RenderCurrentPageLabelProps) => ReactElement;

// -------------------------------------
// Render button to go to the first page
// -------------------------------------

export interface RenderGoToFirstPageProps {
    onClick: () => void;
}

export interface GoToFirstPageProps {
    children: RenderGoToFirstPage;
}

export type RenderGoToFirstPage = (props: RenderGoToFirstPageProps) => ReactElement;

// -------------------------------------
// Render button to go the the last page
// -------------------------------------

export interface RenderGoToLastPageProps {
    onClick: () => void;
}

export interface GoToLastPageProps {
    children: RenderGoToLastPage;
}

export type RenderGoToLastPage = (props: RenderGoToLastPageProps) => ReactElement;

// ------------------------------------
// Render button to go to the next page
// ------------------------------------

export interface RenderNextPageButtonProps {
    isDisabled: boolean;
    onClick: () => void;
}

export type RenderNextPageButton = (props: RenderNextPageButtonProps) => React.ReactElement;

export interface NextPageButtonProps {
    children?: RenderNextPageButton;
}

// ----------------------------------------
// Render button to go to the previous page
// ----------------------------------------

export interface RenderPreviousPageButtonProps {
    isDisabled: boolean;
    onClick: () => void;
}

export type RenderPreviousPageButton = (props: RenderPreviousPageButtonProps) => React.ReactElement;

export interface PreviousPageButtonProps {
    children?: RenderPreviousPageButton;
}

// ------
// Plugin
// ------

export interface PageNavigationPlugin extends Plugin {
    CurrentPageInput: () => ReactElement;
    CurrentPageLabel: (props: CurrentPageLabelProps) => ReactElement;
    GoToFirstPage: (props: GoToFirstPageProps) => ReactElement;
    GoToFirstPageButton: () => ReactElement;
    GoToLastPage: (props: GoToLastPageProps) => ReactElement;
    GoToLastPageButton: () => ReactElement;
    NextPageButton: (props: NextPageButtonProps) => ReactElement;
    PreviousPageButton: (props: PreviousPageButtonProps) => ReactElement;
}

export default function pageNavigationPlugin(): PageNavigationPlugin;

// -----
// Icons
// -----

export class DownArrowIcon extends Component<{}> {}
export class UpArrowIcon extends Component<{}> {}