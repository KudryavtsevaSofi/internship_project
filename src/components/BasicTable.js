import React, { useMemo } from "react";
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import planets from '../server/database/data.json'
import { COLUMNS } from "./columns";
import './table.css';

export const BasicTable = () => {
    // Мемоизация колонок и данных для оптимизации производительности
    const columns = useMemo(
      () => [
        ...COLUMNS.filter((col) => col.accessorKey !== 'suitabilityId'), // Удаляем старую колонку suitabilityId
        {
          id: 'suitability', // Добавляем уникальный id для колонки
          header: 'Suitability',
          accessorFn: (row) => {
            // Маппинг suitabilityId на название из planets.suitabilities
            const suitability = planets.suitabilities.find(
              (s) => s.id === row.suitabilityId
            );
            return suitability ? suitability.name : row.suitabilityId;
          },
        },
      ],
      []
    );
    const data = useMemo(() => planets.planets, []); // Используем planets.planets вместо всего объекта
  
    // Используем useReactTable с getCoreRowModel для базовой функциональности
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });
  
    return (
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };