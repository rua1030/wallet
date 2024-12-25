    "use client";

    import { chain, client } from "@/utils/constants";
    import { ConnectButton, useActiveAccount } from "thirdweb/react";
    import { App } from "./App";
    import Image from "next/image";
    import WalletImage from "@/pngwing.com (1).png"; 

    const Login: React.FC = () => {
        const account = useActiveAccount();

        return (
            <div className="div1login"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 5%",
                    fontFamily: "Arial, sans-serif",
                }}
                    >
                <div style={{ flex: 1, textAlign: "center", padding: "20px" }}>
                    {!account ? (
                        <>
                            <h1 style={{ marginBottom: "20px", fontSize: "2rem", color: "#fff" }}>
                                ¡Conecta tu wallet!
                            </h1>
                            <p style={{ marginBottom: "30px", color: "#666" }}>
                                Accede a tus funcionalidades favoritas conectando tu wallet de manera sencilla.
                            </p>
                            <ConnectButton
                                client={client}
                                chain={chain}
                                connectModal={{
                                    size: "compact",
                                }}
                            />
                        </>
                    ) : (
                        <div>
                            <h1 style={{ fontSize: "2rem", color: "#333" }}>
                                ¡Bienvenido de nuevo!
                                <ConnectButton
                                    client={client}
                                    chain={chain}
                                    connectModal={{
                                        size: "compact",
                                    }}
                                />
                            </h1>
                            <App />
                        </div>
                    )}
                </div>
                <div style={{ flex: 1, textAlign: "center", padding: "20px" }}>
                <Image
                        src={WalletImage}
                        alt="Conecta tu wallet"
                        style={{
                            maxWidth: "100%",
                            maxHeight: "80%",
                            objectFit: "contain",
                            borderRadius: "10px",
                        }}
                        priority 
                />
                </div>
            </div>
        );
    };

    export default Login;
