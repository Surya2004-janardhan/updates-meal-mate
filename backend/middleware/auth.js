import jwt from 'jsonwebtoken';

export const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) return res.status(401).json({ success:false , msg: 'No token, authorization denied' });

    try {
        const token_decode = jwt.verify(token, "1234");
        req.body.userid = token_decode.id;
        next();
    } catch (e) {
        res.status(400).json({ success: false, msg: 'Token is not valid' });
    }
}
