import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';


export interface Imagen {
    url: string;
    full_url: string;
    width: number;
    height: number;
    alt: string;
}

export interface MainFeaturedPostProps {
    post: {
        ancho: number;
        titulo: string;
        descripcion: string;
        color: string;
        imagen: Imagen;
        page?: any;
    }
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
    const { post } = props;

    return (
        <div style={{
            position: "relative"
        }}>
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "transparent!important"
            }}>


                <div style={{
                    width: "100% !important",
                    display: "flex",
                    alignItems: "center",
                }}>
                    <div style={{
                        flex: "1 1 100%",
                        boxSizing: "border-box",
                        maxHeight: "50%",
                        padding: "4rem 2rem",
                        textAlign: "center",
                        color: `${props?.post.color}`
                    }}>
                        <Typography variant="h3" gutterBottom margin="50px 0 50px 0;">
                            <b>{props?.post.titulo}.</b>
                        </Typography>
                        <Typography variant="h5" gutterBottom margin="50px 0 50px 0;">
                            <b>{props?.post.descripcion}.</b>
                        </Typography>
                        <Typography variant="h5" gutterBottom margin="50px 0 50px 0;">
                            <b>Más información.</b>
                        </Typography>
                    </div>

                </div>
            </div>
            <div>
                <img
                    src={`${props?.post.imagen.full_url}`}
                    srcSet={`${props?.post.imagen.full_url}`}
                    alt={props?.post?.imagen.alt}
                    loading="lazy"
                    style={{ width: "100%", height: "auto" }}
                />
            </div>

        </div>

    );
}