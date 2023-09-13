import NextLink from "next/link";
// MATERIAL UI
import { IconButton, Tooltip } from "@mui/material";
// MUI X
import { GridColDef, GridActionsCellItem, GridValueGetterParams } from "@mui/x-data-grid";
// COMPONENTS
import { DataTable } from "../../table/DataTable";
// MODELS
import { Cliente } from "../../../@types/Cliente";
import { Endereco } from "../../../@types/Endereco";
import { Telefone } from "../../../@types/Telefone";
import { TipoEndereco } from "../../../@types/enums/TipoEndereco";
import { TipoTelefone } from "../../../@types/enums/TipoTelefone";
// ICONS
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditIcon from "@mui/icons-material/Edit";

interface GridClientesProps {
    clientes: Cliente[];
    loading?: boolean;
}

export function GridClientes({ clientes, loading }: GridClientesProps) {

    function handleDeletClick(id: number) {
        alert("DELETAR CLIENTE [" + id + "]")
    }

    function getEndereco(params: GridValueGetterParams) {
        const enderecoResidencial = params.row.enderecos.find((endereco: Endereco) => endereco.tipo === TipoEndereco.RESIDENCIAL);

        if (enderecoResidencial) {
            const enderecoFormatado = `${enderecoResidencial.logradouro}, ${enderecoResidencial.numero} - ${enderecoResidencial.bairro}`;
            return enderecoFormatado;
        } else {
            return "Não cadastrado";
        }
    }

    function getTelefone(params: GridValueGetterParams) {
        const celular = params.row.telefones.find((telefone: Telefone) => telefone.tipo == TipoTelefone.CELULAR);

        if (celular) {
            const numeroCelular = celular.numero;
            return numeroCelular;
        } else {
            return "Não cadastrado";
        }
    }

    const COLUMNS: GridColDef[] = [
        {
            field: "id",
            headerName: "Código",
            type: "number",
            minWidth: 120,
            headerAlign: "left",
            align: "left",
        },
        {
            field: "nome",
            headerName: "Nome",
            flex: 1,
            minWidth: 200
        },
        {
            field: "telefones",
            headerName: "Celular",
            flex: 0.5,
            minWidth: 120,
            valueGetter: getTelefone,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            minWidth: 110,
        },
        {
            field: "enderecos",
            headerName: "Endereço residencial",
            flex: 1,
            minWidth: 210,
            valueGetter: getEndereco,
        },
        {
            field: "observacao",
            headerName: "Observações",
            flex: 1,
            minWidth: 180
        },
        {
            field: "actions",
            type: "actions",
            headerName: "Ações",
            flex: 0.5,
            minWidth: 80,
            getActions: (params) => [
                <>
                    <Tooltip title="Editar" arrow>
                        <IconButton
                            LinkComponent={NextLink}
                            href={`clientes/${params.id}/editar`}
                        >
                            <EditIcon color="info" />
                        </IconButton>
                    </Tooltip>
                </>,
                <GridActionsCellItem
                    key={params.id}
                    label="Deletar"
                    icon={
                        <Tooltip title="Deletar" arrow>
                            <DeleteRoundedIcon color="error" />
                        </Tooltip>
                    }
                    onClick={() => handleDeletClick(Number(params.id))}
                />,
            ],
        },
    ];

    return <DataTable columns={COLUMNS} rows={clientes} loading={loading} />
}