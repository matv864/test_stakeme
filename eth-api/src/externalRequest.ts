import axios, { AxiosResponse } from 'axios';

import { dictType } from './commonTypes';
import { RPC_LINK } from "./config";



const node = axios.create({
    baseURL: RPC_LINK,
  });


export async function requestNode(method: string, params: any) {

    const data = {
        "jsonrpc": "2.0",
        "method": method,
        "params": params,
        "id": 1
    };

    try{
        let response: AxiosResponse = await node.post("", data);
        if ("error" in response.data){
            return {
                "error": response.data.error.code,
                "message": response.data.error.message
            };
        }

        if (response.data.result == null) {
            return {"result": null};
        }
        
        return response.data.result
    } catch {
        return undefined;
    }
}


export async function getBlockByNumberFromNode(number: string) {
    let response: dictType[] | undefined = await requestNode(
        "eth_getBlockByNumber",
        [number, true]
    );
    if (response == undefined){
        return "bad request";
    }
    if ("error" in response){
        return response;
    }

    return {
        "height": response["number"],
        "hash": response["hash"],
        "parentHash": response["parentHash"],
        "gasLimit": response["gasLimit"],
        "gasUsed": response["gasUsed"],
        "size": response["size"],
    };
}

export async function getTransactionByHashFromNode(hash:string) {
    let response: dictType[] | undefined = await requestNode(
        "eth_getTransactionByHash",
        [hash]
    );
    if (response == undefined){
        return "bad request";
    }
    
    if ("error" in response){
        return response;
    }

    return response;
}