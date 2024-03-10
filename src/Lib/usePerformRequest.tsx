import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { baseURL as defaultBaseURL } from "./Endpoints";
import { DefaultResponse } from "./Responses";
interface PerformRequestOptions {
  method: "POST" | "GET" | "PUT" | "DELETE";
  data: any;
  route: string;
  token?: string;
}

const PerformRequest = async ({ method, data, route, token }: PerformRequestOptions) => {
  const requestToken = token ?? Cookies.get("token");
  const config = {
    method,
    data,
    url: route,
    headers: {
      Authorization: `Bearer ${requestToken}`,
    },
  };
  const r: any = axios.request(config);
  return r;
};

const UploadFile = async (file: File) => {
  const token = Cookies.get("token");

  const fileFormData = new FormData();
  fileFormData.append("token", token ?? "");
  fileFormData.append("file", file, file.name.toLowerCase().split(" ").join().replaceAll(",", ""));
  const config: AxiosRequestConfig = {
    method: "POST",
    url: `${defaultBaseURL}`,

    data: fileFormData,
    maxBodyLength: Infinity,
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data",
    },
  };
  const response = await axios.request(config);

  return response as any;
};

interface RequestOptions {
  method: "POST" | "GET" | "PUT" | "DELETE";
  url: string;
  body?: any;
  usePublicToken?: boolean;
  callback?: () => void;
  errorCodes?: number[];
}
function usePerformRequest<Type>({ method, url, body, usePublicToken, errorCodes, callback }: RequestOptions) {
  const token = Cookies.get("token");
  const [data, setData] = useState<Type>();
  const [response, setResponse] = useState<DefaultResponse>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const reloadData = async () => {
    const config: AxiosRequestConfig = {
      method,
      data: body,
      url,
      headers: {
        Authorization: `Bearer ${usePublicToken ? "07c84a7f5fb9fb2eb9bd0c3d9cef67c4" : token}`,
      },
    };

    setLoading(true);
    const r = await axios(config);
    setLoading(false);
    if (r.data) {
      setResponse(r.data);
      setData(r.data.response_code === 200 ? r.data.data : undefined);
      if (errorCodes && callback) {
        if (errorCodes.includes(r.data.response_code)) {
          callback();
        }
      }
    }
  };
  useEffect(() => {
    reloadData().catch(() => {
      setLoading(false);
    });
  }, [url]);

  return { response, data, isLoading, reloadData };
}

export { usePerformRequest, PerformRequest };
