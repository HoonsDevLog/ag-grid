// ag-grid-enterprise v17.0.0
import { IRowModel, RowNode, IViewportDatasource, RowBounds } from "ag-grid/main";
export declare class ViewportRowModel implements IRowModel {
    private gridOptionsWrapper;
    private eventService;
    private selectionController;
    private context;
    private gridApi;
    private columnApi;
    private firstRow;
    private lastRow;
    private rowCount;
    private rowNodesByIndex;
    private rowHeight;
    private viewportDatasource;
    private init();
    isLastRowFound(): boolean;
    private destroyDatasource();
    private calculateFirstRow(firstRenderedRow);
    private calculateLastRow(lastRenderedRow);
    private onViewportChanged(event);
    purgeRowsNotInViewport(): void;
    setViewportDatasource(viewportDatasource: IViewportDatasource): void;
    getType(): string;
    getRow(rowIndex: number): RowNode;
    getPageFirstRow(): number;
    getPageLastRow(): number;
    getRowCount(): number;
    getRowIndexAtPixel(pixel: number): number;
    getRowBounds(index: number): RowBounds;
    getCurrentPageHeight(): number;
    isEmpty(): boolean;
    isRowsToRender(): boolean;
    getNodesInRangeForSelection(firstInRange: RowNode, lastInRange: RowNode): RowNode[];
    forEachNode(callback: (rowNode: RowNode, index: number) => void): void;
    private setRowData(rowData);
    private createBlankRowNode(rowIndex);
    setRowCount(rowCount: number): void;
    isRowPresent(rowNode: RowNode): boolean;
}
